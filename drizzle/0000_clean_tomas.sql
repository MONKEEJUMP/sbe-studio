CREATE TABLE "metric" (
	"key" text PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"value_text" text,
	"value_num" double precision,
	"unit" text,
	"source" text NOT NULL,
	"measured_at" timestamp with time zone NOT NULL,
	"updated_by" text DEFAULT 'seed' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
