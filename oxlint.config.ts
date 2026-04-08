import { typescript, config } from '@rivuty/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript, config],
});
