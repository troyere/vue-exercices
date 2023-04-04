import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DefaultMain from '@/components/DefaultMain.vue'

describe('DefaultMain', () => {
  it('renders properly', () => {
    const title = 'Hello Vitest'

    const wrapper = mount(DefaultMain, { props: { title } })

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
