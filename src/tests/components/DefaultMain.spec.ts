import { describe, expect, it } from 'vitest';
import DefaultMain from '@/components/DefaultMain.vue';
import { mount } from '@vue/test-utils';

describe('DefaultMain', () => {
  it('renders properly', () => {
    const title = 'Hello Vitest';

    const wrapper = mount(DefaultMain, { props: { title } });

    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
