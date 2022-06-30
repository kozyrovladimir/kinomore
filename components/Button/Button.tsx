import {ButtonHTMLAttributes, memo, PropsWithChildren} from 'react';
import {ButtonBase} from '../ButtonBase/ButtonBase';
import classNames from 'classnames';
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'stroke' | 'regular' | 'sm';
    className?: string;
    animationDuration?: number;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(({children, variant, className, animationDuration, ...props}) => {

    return (
        <ButtonBase
            ripple
            animationDuration={animationDuration}
            className={classNames(
                styles.btn,
                variant === 'stroke' && styles.stroke,
                variant === 'regular' && styles.regular,
                variant === 'sm' && styles.small,
                className
            )}
            {...props}
        >
            {children}
        </ButtonBase>
    )
})

Button.displayName = 'Button'