import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {
  uploadCloudIcon,
  extLinkIcon,
  userIcon,
  taskContactIcon,
} from '@workday/canvas-system-icons-web';
import {DeprecatedMenu, DeprecatedMenuItem, DeprecatedMenuItemProps} from '../index';

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default {
  title: 'Testing/Preview/Menu',
  component: DeprecatedMenu,
  parameters: {
    chromatic: {
      disable: false,
      diffThreshold: 0.3, // Chrome downsizes images non-deterministically. From testing, 0.28 is the minimum.
    },
  },
};

interface StoryMenuItemProps extends Omit<DeprecatedMenuItemProps, 'role'> {
  text: React.ReactNode;
}

const createMenuItems = (hasIcons?: boolean, isFocused?: boolean): StoryMenuItemProps[] => {
  return [
    {
      text: `First Item`,
      icon: hasIcons ? uploadCloudIcon : undefined,
      isFocused: isFocused,
    },
    {
      text: `Second Item (with a really really really long label)`,
      icon: undefined,
    },
    {
      text: `Third Item (with a really really really long label)`,
      icon: hasIcons ? uploadCloudIcon : undefined,
    },
    {
      text: `Fourth Item (with a really really really long label)`,
      icon: hasIcons ? uploadCloudIcon : undefined,
      secondaryIcon: hasIcons ? taskContactIcon : undefined,
    },
    {
      text: `Fifth Item (disabled)`,
      icon: undefined,
      secondaryIcon: hasIcons ? extLinkIcon : undefined,
      isDisabled: true,
    },
    {
      text: hasIcons ? (
        ''
      ) : (
        <em>
          Sixth Item (<b>with markup</b>)
        </em>
      ),
      icon: hasIcons ? userIcon : undefined,
      'aria-label': hasIcons ? `I am a label for screen readers` : undefined,
    },
    {
      text: `Seventh Item (with divider)`,
      icon: undefined,
      hasDivider: true,
    },
  ];
};
const buildItem = (item: StoryMenuItemProps, index: number) => (
  <DeprecatedMenuItem
    key={index}
    onClick={noop}
    icon={item.icon}
    isFocused={item.isFocused}
    secondaryIcon={item.secondaryIcon}
    isDisabled={item.isDisabled}
    hasDivider={item.hasDivider}
    aria-label={item['aria-label']}
  >
    {item.text}
  </DeprecatedMenuItem>
);

export const MenuItemStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'With Icons', props: {hasIcons: true}},
        {label: 'With Icons and Custom Width', props: {hasIcons: true, width: 200}},
        {
          label: 'With Icons and Custom Focus',
          props: {hasIcons: true, initialSelectedItem: 3},
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <DeprecatedMenu width={props.width} initialSelectedItem={props.initialSelectedItem}>
          {createMenuItems(props.hasIcons).map(buildItem)}
        </DeprecatedMenu>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
