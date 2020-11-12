import React from 'react';
import Styled from 'styled-components';

import { getAppearance } from './badge.helper';

type BadgeVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface IBadgeProps {
    /* children: preferred string type */
    children: React.ReactNode;
    /* size: Custom font size */
    size?: number;
    /* color: Custom text color */
    color?: string;
    /* backgroundColor: Custom background color */
    backgroundColor?: string;
    /* variant: Different variant can have different styles */
    variant?: BadgeVariants;
}
const defaultProps = {
    variant: 'secondary'
};

const BadgeElement = Styled.span`
  font-size: ${(props: any) => props.theme.fontSizes[props.size]};
  padding: 2px 4px;
  background-color: ${(props: any) =>
      props.backgroundColor || getAppearance(props).bgColor};
  color: ${(props: any) => props.color || getAppearance(props).color};
  border-radius: 4px;
`;

const Badge = (props: IBadgeProps) => {
    const { children, ...others } = props;

    return <BadgeElement {...others}>{children}</BadgeElement>;
};

Badge.defaultProps = defaultProps;
export default Badge;
