import config from '../docusaurus.config';

describe('site config', () => {
  it('has title docusaurus fun case-insensitive', () => {
    expect(config.title?.toLowerCase()).toBe('docusaurus fun');
  });

  it('tagline is not empty', () => {
    expect(config.tagline).toBeDefined();
    expect(typeof config.tagline).toBe('string');
    expect(config.tagline?.trim()).not.toHaveLength(0);
  });
});
