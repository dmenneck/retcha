import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Retcha, useRetcha } from './index'

describe('Retcha', () => {
  test('Retcha component renders correctly', () => {
    const component = renderer.create(
      <Retcha />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})