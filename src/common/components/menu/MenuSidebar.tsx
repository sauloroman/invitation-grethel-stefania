import React from 'react'
import { XIcon, CaretRightIcon, GiftIcon } from '@phosphor-icons/react'

import { useMenu, useNavigation } from '@/common/hooks'
import { MusicPlayer } from '@/common/components/music-player/MusicPlayer'
import { Button } from '@/common/components/button/Button'
import type { MenuSidebarProps } from '@/common/types'
import logo from '@/assets/images/icons/logo.png'

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
    title = 'Grethel Stefania',
    items = [],
    children,
}) => {
    const { goTo } = useNavigation()
    const { isMenuOpen, onCloseMenu, activeItems } = useMenu()

    const navItems = activeItems.length > 0 ? activeItems : items

    const overlayClass = `menu-overlay ${isMenuOpen ? 'menu-overlay--open' : ''}`
    const sidebarClass = `menu-sidebar ${isMenuOpen ? 'menu-sidebar--open' : ''}`

    return (
        <>
            <div className={overlayClass} onClick={onCloseMenu} aria-hidden="true" />

            <aside className={sidebarClass} aria-label="Menú de navegación">
                <header className="menu-sidebar__header">
                    {logo && (
                        <div className="menu-sidebar__logo">
                            <img src={logo} alt="Logo Grethel Stefania" />
                        </div>
                    )}
                    <div className="menu-sidebar__header-info">
                        <span className="menu-sidebar__subtitle">MIS XV AÑOS</span>
                        <h2 className="menu-sidebar__title">{title}</h2>
                    </div>
                    <button
                        type="button"
                        className="menu-sidebar__close"
                        onClick={onCloseMenu}
                        aria-label="Cerrar menú"
                    >
                        <XIcon size={20} weight="bold" />
                    </button>
                </header>

                <div className="menu-sidebar__content">
                    {children ? (
                        children
                    ) : (
                        <nav className="menu-sidebar__nav">
                            <ul className="menu-sidebar__list">
                                {navItems.map((item, index) => (
                                    <li key={index} className={`menu-sidebar__item ${item.isPremium ? 'menu-sidebar__item--premium' : ''}`}>
                                        <a
                                            href={item.href || '#'}
                                            className={`menu-sidebar__link ${item.isPremium ? 'menu-sidebar__link--premium' : ''}`}
                                            onClick={() => {
                                                if (item.onClick) item.onClick()
                                                onCloseMenu()
                                            }}
                                        >
                                            <div className="menu-sidebar__link-left">
                                                {item.icon && (
                                                    <span className="menu-sidebar__link-icon">{item.icon}</span>
                                                )}
                                                <div className="menu-sidebar__link-text">
                                                    <span className="menu-sidebar__link-label">{item.label}</span>
                                                    {item.isPremium && (
                                                        <span className="menu-sidebar__link-hint">Toca para abrir</span>
                                                    )}
                                                </div>
                                            </div>
                                            <CaretRightIcon size={16} className="menu-sidebar__link-arrow" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    <div className="menu-sidebar__envelop">
                        <Button
                            variant="secondary"
                            fullWidth
                            icon={<GiftIcon size={20} weight="light" />}
                            onClick={() => {
                                onCloseMenu()
                                goTo('/')
                            }}
                        >
                            Mi Sobre Digital
                        </Button>
                    </div>

                    <div className="menu-sidebar__music">
                        <MusicPlayer variant="card" />
                    </div>
                </div>

                <footer className="menu-sidebar__footer">
                    <div className="menu-sidebar__footer-line"></div>
                    <span className="menu-sidebar__footer-text">✦ AGUASCALIENTES - MX ✦</span>
                </footer>
            </aside>
        </>
    )
}