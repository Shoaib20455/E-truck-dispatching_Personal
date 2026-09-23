import * as migration_20260727_000000_initial from './20260727_000000_initial';
import * as migration_20260805_000000_users_profile_fields from './20260805_000000_users_profile_fields';
import * as migration_20260806_000001_users_bio from './20260806_000001_users_bio';
import * as migration_20260810_121227_add_faq_heading from './20260810_121227_add_faq_heading';
import * as migration_20260815_113147_add_leads from './20260815_113147_add_leads';

export const migrations = [
  {
    up: migration_20260727_000000_initial.up,
    down: migration_20260727_000000_initial.down,
    name: '20260727_000000_initial',
  },
  {
    up: migration_20260805_000000_users_profile_fields.up,
    down: migration_20260805_000000_users_profile_fields.down,
    name: '20260805_000000_users_profile_fields',
  },
  {
    up: migration_20260806_000001_users_bio.up,
    down: migration_20260806_000001_users_bio.down,
    name: '20260806_000001_users_bio',
  },
  {
    up: migration_20260810_121227_add_faq_heading.up,
    down: migration_20260810_121227_add_faq_heading.down,
    name: '20260810_121227_add_faq_heading',
  },
  {
    up: migration_20260815_113147_add_leads.up,
    down: migration_20260815_113147_add_leads.down,
    name: '20260815_113147_add_leads'
  },
];
