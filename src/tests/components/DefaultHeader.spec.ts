import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { RouteLocationRaw } from 'vue-router'
import DefaultHeader from '@/components/DefaultHeader.vue'
import router from '@/router'

describe('DefaultHeader', () => {
  it('renders properly', () => {
    const title = 'Hello Vitest'
    const navConfig: { to: RouteLocationRaw; title: string }[] = [{ to: '/', title: 'Home' }]
    const global = {
      plugins: [router]
    }

    const wrapper = mount(DefaultHeader, { global, props: { title, navConfig } })

    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Home')
  })
})
