import { defineConfig } from 'oxlint';
import { typescript, config } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript, config],
});
