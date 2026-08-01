import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    HouseIcon,
    MapPinIcon,
    CalendarCheckIcon,
    ImagesIcon,
    EnvelopeSimpleIcon,
    SparkleIcon,
} from '@phosphor-icons/react'

import { openMenu, closeMenu } from '@/store/ui/menu.slice'
import type { RootState } from '@/store/store'
import type { MenuProps, MenuItem, MenuVariant, ButtonVariant } from '@/common/types'
import { useInvitationConfig } from './useInvitationConfig'

const SECTION_ICONS: Record<string, React.ReactNode> = {
    '#hero': <HouseIcon size={22} weight="light" />,
    '#places': <MapPinIcon size={22} weight="light" />,
    '#itinerary': <CalendarCheckIcon size={22} weight="light" />,
    '#gallery': <ImagesIcon size={22} weight="light" />,
    '#confirmation': <EnvelopeSimpleIcon size={22} weight="light" />,
}

const PRIMARY_NAV_ITEMS: MenuItem[] = [
    { label: 'Inicio', href: '#hero', icon: <HouseIcon size={22} weight="light" /> },
    { label: 'Ubicación', href: '#places', icon: <MapPinIcon size={22} weight="light" /> },
    { label: 'Itinerario', href: '#itinerary', icon: <CalendarCheckIcon size={22} weight="light" /> },
    { label: 'Galería', href: '#gallery', icon: <ImagesIcon size={22} weight="light" /> },
    { label: 'Confirmación', href: '#confirmation', icon: <EnvelopeSimpleIcon size={22} weight="light" /> },
]

export const useMenu = (props?: MenuProps) => {
    const dispatch = useDispatch()
    const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen)
    const { theme, config } = useInvitationConfig()

    const onOpenMenu = () => dispatch(openMenu())
    const onCloseMenu = () => dispatch(closeMenu())
    const onToggleMenu = () => {
        if (isMenuOpen) {
            dispatch(closeMenu())
        } else {
            dispatch(openMenu())
        }
    }

    const isMenuVisible = props?.show ?? theme.menu?.show ?? config?.hasMenu ?? true
    const activeVariant: MenuVariant = props?.variant || theme.menu?.variant || 'floating'
    const activeTitle = props?.title || theme.menu?.title || 'Menú'
    const activeBtnVariant: ButtonVariant = props?.buttonVariant || theme.menu?.buttonVariant || theme.buttonVariant || 'icon'

    const activeItems: MenuItem[] = useMemo(() => {
        const rawItems = (props?.items && props.items.length > 0)
            ? props.items
            : (theme.menu?.items && theme.menu.items.length > 0)
                ? (theme.menu.items as MenuItem[])
                : PRIMARY_NAV_ITEMS

        return rawItems.map((item) => ({
            ...item,
            icon: item.icon || (item.href ? SECTION_ICONS[item.href] : <SparkleIcon size={22} weight="light" />),
        }))
    }, [props?.items, theme.menu?.items])

    return {
        isMenuOpen,
        isMenuVisible,
        activeVariant,
        activeTitle,
        activeBtnVariant,
        activeItems,
        onOpenMenu,
        onCloseMenu,
        onToggleMenu,
    }
}
