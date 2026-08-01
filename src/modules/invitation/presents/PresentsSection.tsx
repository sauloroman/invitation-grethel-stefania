import React from 'react'

import bg from '@/assets/images/backgrounds/bg-presents.svg'
import bg2 from '@/assets/images/backgrounds/bg-presents-2.svg'
import present from '@/assets/images/icons/present-icon.svg'
import envelop from '@/assets/images/icons/presents-envelop.svg'

export const PresentsSection: React.FC = () => {
    return (
        <div id="presents" className="presents">
            <div className="presents__container">
                <div className="presents__card">
                    <div className="presents__card-bg" style={{ backgroundImage: `url(${bg})` }}></div>
                    <div className="presents__icon">
                        <img src={present} alt="present" />
                    </div>
                    <h2 className="presents__title">Obsequios Físicos</h2>
                    <p className="presents__text">
                        Si deseas consentirme con un regalo físico o detalle especial, cualquier obsequio será recibido con mucha ilusión y gratitud.
                    </p>
                </div>

                <div className="presents__card">
                    <div className="presents__card-bg" style={{ backgroundImage: `url(${bg2})` }}></div>
                    <div className="presents__icon">
                        <img src={envelop} alt="present" />
                    </div>
                    <h2 className="presents__title">Lluvia de Sobres</h2>
                    <p className="presents__text">
                        Si prefieres apoyarme con una aportación en efectivo para mis planes y metas, dispondremos de un sobre y buzón especial el día de la fiesta.
                    </p>
                </div>
            </div>
        </div>
    )
}


