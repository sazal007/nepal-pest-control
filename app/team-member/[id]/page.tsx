"use client";

import Image from "next/image";
import { Mail, MapPin, User, Loader2, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";

import { useGetTeamMember } from "@/hooks/use-team";
import { sanitizeContent } from "@/lib/html-sanitizer";

export default function TeamMemberPage() {
  const params = useParams<{ id?: string }>();
  const id = params?.id;
  const { data: member, isLoading, error } = useGetTeamMember(id);

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Failed to load team member details.
      </div>
    );
  }

  const sanitizedAbout = sanitizeContent(member.about || "");

  const socials = [
    { label: "Facebook", href: member.facebook },
    { label: "Instagram", href: member.instagram },
    { label: "LinkedIn", href: member.linkedin },
    { label: "Twitter", href: member.twitter },
  ].filter((s) => s.href);

  return (
    <div className="pt-40 pb-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        {/* <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.1] mb-3">
            {member.name}
          </h1>
          <p className="text-blue-600 font-medium uppercase tracking-wide mb-4">
            {member.role}
          </p>
          {member.email && (
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail size={16} />
              <a
                href={`mailto:${member.email}`}
                className="hover:text-blue-600 transition-colors"
              >
                {member.email}
              </a>
            </div>
          )}
        </div> */}

        {/* Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 100vw"
                priority
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-600" />
                <span>{member.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-600" />
                <span>{member.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Infin Consultants</span>
              </div>
            </div>

            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors border border-gray-200 px-3 py-2 rounded-full"
                  >
                    <ExternalLink size={14} />
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xs">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About {member.role}
              </h2>
              {sanitizedAbout ? (
                <div
                  className="prose prose-gray max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizedAbout }}
                />
              ) : (
                <p className="text-gray-600">Biography coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
