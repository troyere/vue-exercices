import { describe, expect, it } from 'vitest';
import DefaultHeader from '@/components/DefaultHeader.vue';
import type { RouteLocationRaw } from 'vue-router';
import { mount } from '@vue/test-utils';
import router from '@/router';

describe('DefaultHeader', () => {
  it('renders properly', () => {
    const title = 'Hello Vitest';
    const navConfig: { to: RouteLocationRaw; title: string }[] = [{ to: '/', title: 'Home' }];
    const global = {
      plugins: [router],
    };

    const wrapper = mount(DefaultHeader, { global, props: { title, navConfig } });

    expect(wrapper.text()).toContain('Hello Vitest');
    expect(wrapper.text()).toContain('Home');
  });
});
