import * as migration_20260727_000000_initial from './20260727_000000_initial';
import * as migration_20260805_000000_users_profile_fields from './20260805_000000_users_profile_fields';
import * as migration_20260806_000001_users_bio from './20260806_000001_users_bio';

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
];
