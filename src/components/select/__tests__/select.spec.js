import { mount, flushPromises } from '@vue/test-utils'
import { nextTick } from '@vue/runtime-core'
// import {Select} from 'ant-design-vue'
import ASelect from '../Select.vue'

const fileName = 'ant'

describe('select', () => {
  test('base', async () => {
    const wrapper = mount(ASelect)

    await wrapper.find(`.${fileName}-select`).trigger('click')
    await nextTick()
    await flushPromises()
    expect(wrapper.find(`.${fileName}-select`).classes()).toContain(`${fileName}-select-open`)
  })
})