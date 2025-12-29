import { MetadataRoute } from "next";
import { Services } from "@/services/services.service";
import { blogsService } from "@/services/blogs.service";
import { teamService } from "@/services/team.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nepalpestcontrol.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic routes - Services
  let serviceRoutes: MetadataRoute.Sitemap = [];
  try {
    const servicesData = await Services.getServices();
    serviceRoutes = (servicesData.results || []).map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: service.updated_at
        ? new Date(service.updated_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching services for sitemap:", error);
  }

  // Dynamic routes - Blogs
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogsData = await blogsService.getBlogs();
    blogRoutes = (blogsData.results || []).map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updated_at
        ? new Date(blog.updated_at)
        : new Date(blog.created_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Dynamic routes - Team Members
  let teamRoutes: MetadataRoute.Sitemap = [];
  try {
    const teamMembers = await teamService.getTeamMembers();
    teamRoutes = (teamMembers || []).map((member) => ({
      url: `${baseUrl}/team-member/${member.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching team members for sitemap:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...teamRoutes];
}
