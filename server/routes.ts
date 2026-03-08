import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json({ success: true, id: submission.id });
    } catch (err) {
      console.error("Contact submission error:", err);
      return res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.json(submissions);
    } catch (err) {
      console.error("Fetch contacts error:", err);
      return res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid email address",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const subscriber = await storage.createNewsletterSubscriber(parsed.data);

      if (subscriber === null) {
        return res.status(200).json({ success: true, alreadySubscribed: true });
      }

      return res.status(201).json({ success: true, alreadySubscribed: false });
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      return res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      return res.json(subscribers);
    } catch (err) {
      console.error("Fetch newsletter error:", err);
      return res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });

  return httpServer;
}
