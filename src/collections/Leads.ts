import { canAccessAdmin, type CollectionConfig } from "payload";

type LeadStatus = "new" | "in-progress" | "done" | "cancelled";

const allowedStatuses: LeadStatus[] = [
  "new",
  "in-progress",
  "done",
  "cancelled",
];

function isLeadStatus(value: unknown): value is LeadStatus {
  return (
    typeof value === "string" &&
    allowedStatuses.includes(value as LeadStatus)
  );
}

export const Leads: CollectionConfig = {
  slug: "leads",

  labels: {
    singular: "Lead",
    plural: "Leads",
  },

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "status", "createdAt"],
    group: false,
    description:
      "Form submissions received from the website. Use Queries by Page to review submissions by their source page.",
    components: {
      views: {
        edit: {
          root: {
            Component: "@/app/(payload)/admin/LeadDetailView",
          },
        },
      },
    },
  },

  access: {
    create: () => false,
    read: async ({ req }) => {
      if (!req.user) return false;

      try {
        await canAccessAdmin({ req });
        return true;
      } catch {
        return false;
      }
    },
    update: () => false,
    delete: () => false,
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
    },
    {
      name: "email",
      type: "text",
      required: true,
      label: "Email",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
    },
    {
      name: "pagePath",
      type: "text",
      index: true,
      label: "Page Path",
      admin: {
        description: "The website URL path the submission came from, e.g. /contact.",
      },
    },
    {
      name: "sourcePage",
      type: "text",
      index: true,
      label: "Source / Campaign",
      admin: {
        description: "Context label sent by the form, e.g. 'Texas CTA Lead'.",
      },
    },
    {
      name: "submissionType",
      type: "select",
      index: true,
      options: [
        { label: "Contact Form", value: "contact-form" },
        { label: "Lead Capture", value: "lead-capture" },
        { label: "State Picker", value: "state-picker" },
        { label: "Service Picker", value: "service-picker" },
        { label: "Schedule Call", value: "schedule-call" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "In Progress", value: "in-progress" },
        { label: "Done", value: "done" },
        { label: "Cancelled", value: "cancelled" },
      ],
      index: true,
      admin: {
        position: "sidebar",
        components: {
          Cell: "@/app/(payload)/admin/LeadStatusCell",
        },
      },
    },
    {
      name: "handledBy",
      type: "text",
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: "handledAt",
      type: "date",
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],

  endpoints: [
    {
      path: "/status",
      method: "post",

      handler: async (req) => {
        if (!req.user) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        try {
          await canAccessAdmin({ req });
        } catch {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!req.json) {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        let body: { id?: unknown; status?: unknown };

        try {
          body = (await req.json()) as { id?: unknown; status?: unknown };
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const leadID =
          typeof body.id === "number"
            ? body.id
            : typeof body.id === "string"
              ? Number(body.id)
              : Number.NaN;

        if (
          !Number.isInteger(leadID) ||
          leadID <= 0 ||
          !isLeadStatus(body.status)
        ) {
          return Response.json({ error: "Invalid payload" }, { status: 400 });
        }

        const updateData: {
          status: LeadStatus;
          handledBy: string | null;
          handledAt: string | null;
        } = {
          status: body.status,
          handledBy: null,
          handledAt: null,
        };

        if (body.status === "done") {
          updateData.handledBy = req.user.email;
          updateData.handledAt = new Date().toISOString();
        }

        const lead = await req.payload.update({
          collection: "leads",
          id: leadID,
          overrideAccess: true,
          data: updateData,
        });

        return Response.json({ success: true, lead });
      },
    },
  ],
};