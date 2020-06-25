// TODO: torn, can either bake this here; or have to create a whole new button type
// Only ways that you can pass in a custom React component for render :l
import { ExpandableToolbarButton, ListMenu } from '@ohif/ui';
import React from 'react';
import classnames from 'classnames';

export default [
  // Divider
  {
    id: 'Divider',
    type: 'ohif.divider',
  },
  // ~~ Primary
  {
    id: 'Zoom',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-zoom',
      label: 'Zoom',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Zoom' },
      type: 'primary',
    },
  },
  {
    id: 'Wwwc',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    component: ExpandableToolbarButton,
    props: {
      isActive: true,
      icon: 'tool-window-level',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Wwwc' },
      commands: {
        'windowLevelPreset1': {
          commandName: 'windowLevelPreset1',
          commandOptions: {},
        },
        'windowLevelPreset2': {
          commandName: 'windowLevelPreset2',
          commandOptions: {},
        },
        'windowLevelPreset3': {
          commandName: 'windowLevelPreset3',
          commandOptions: {},
        },
        'windowLevelPreset4': {
          commandName: 'windowLevelPreset4',
          commandOptions: {},
        },
        'windowLevelPreset5': {
          commandName: 'windowLevelPreset5',
          commandOptions: {},
        }
      },
      type: 'primary',
      content: ListMenu,
      contentProps: {
        options: [
          { value: 'windowLevelPreset1', title: 'Soft tissue', subtitle: '400 / 40' },
          { value: 'windowLevelPreset2', title: 'Lung', subtitle: '1500 / -600' },
          { value: 'windowLevelPreset3', title: 'Liver', subtitle: '150 / 90' },
          { value: 'windowLevelPreset4', title: 'Bone', subtitle: '80 / 40' },
          { value: 'windowLevelPreset5', title: 'Brain', subtitle: '2500 / 480' },
        ],
        renderer: ({ title, subtitle, isActive, index }) => (
          <>
            <div>
              <span className={classnames(isActive ? "text-black" : "text-white", "mr-2 text-base")}>
                {title}
              </span>
              <span className={classnames(isActive ? "text-black" : "text-aqua-pale", "font-thin text-sm")}>
                {subtitle}
              </span>
            </div>
            <span className={classnames(isActive ? "text-black" : "text-primary-active", "text-sm")}>{index + 1}</span>
          </>
        )
      }
    },
  },
  {
    id: 'Pan',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Pan',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Pan' },
      type: 'primary',
    },
  },
  {
    id: 'Capture',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Capture',
      commandName: 'showDownloadViewportModal',
      type: 'primary',
    },
  },
  {
    id: 'Layout',
    type: 'ohif.layoutSelector',
  },
  // ~~ Primary: NESTED
  {
    id: 'ResetView',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Reset View',
      commandName: 'resetViewport',
      type: 'primary',
    },
  },
  {
    id: 'RotateClockwise',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Rotate Right',
      commandName: 'rotateViewportCW',
      type: 'primary',
    },
  },
  {
    id: 'FlipHorizontally',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Flip Horizontally',
      commandName: 'flipViewportHorizontal',
      type: 'primary',
    },
  },
  {
    id: 'StackScroll',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Stack Scroll',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'StackScroll' },
      type: 'primary',
    },
  },
  {
    id: 'Magnify',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Magnify',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Magnify' },
      type: 'primary',
    },
  },
  {
    id: 'Invert',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Invert',
      commandName: 'invertViewport',
      type: 'primary',
    },
  },
  // TODO: Toggle
  {
    id: 'Cine',
    type: 'ohif.action',
    props: {
      icon: 'tool-capture',
      label: 'Cine',
      commandName: '',
      type: 'primary',
    },
  },
  // TODO: 2D MPR: We had said this was off the table?
  {
    id: 'Angle',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Angle',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Angle' },
      type: 'primary',
    },
  },
  {
    id: 'Probe',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Probe',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Probe' },
      type: 'primary',
    },
  },
  {
    id: 'RectangleRoi',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-move',
      label: 'Rectangle',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'RectangleRoi' },
      type: 'primary',
    },
  },
  // ~~ Secondary
  {
    id: 'Annotate',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-annotate',
      label: 'Annotate',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'ArrowAnnotate' },
      type: 'secondary',
    },
  },
  {
    id: 'Bidirectional',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-bidirectional',
      label: 'Bidirectional',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Bidirectional' },
      type: 'secondary',
    },
  },
  {
    id: 'Ellipse',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-elipse',
      label: 'Ellipse',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'EllipticalRoi' },
      type: 'secondary',
    },
  },
  {
    id: 'Length',
    type: 'ohif.radioGroup',
    config: {
      groupName: 'primaryTool',
    },
    props: {
      isActive: false,
      icon: 'tool-length',
      label: 'Length',
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Length' },
      type: 'secondary',
    },
  },
];
