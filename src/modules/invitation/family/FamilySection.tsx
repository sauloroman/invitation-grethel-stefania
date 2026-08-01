import React from 'react'
import bg from '@/assets/images/backgrounds/bg-family.svg'
import photo from '@/assets/images/photos/5.jpeg'

export const FamilySection: React.FC = () => {
    return (
        <div id="family" className="family">
            <div className="family__photo">
                <div className="family__photo-overlay"></div>
                <img src={photo} alt="Grethel Stefania Foto" />
            </div>

            <div className="family__card">
                <div className="family__card-bg"></div>

                <div className="family__card-content">
                    <div className="family__quote">
                        <p className="family__quote-text">
                            &ldquo;Pues mandará a sus ángeles acerca de tí, para que te guarden en todos tus caminos.&rdquo;
                        </p>
                        <span className="family__quote-author">&mdash; Salmo 91:11 &mdash;</span>
                    </div>

                    <div className="family__blessing">
                        <p>Con la bendición de Dios y en compañía de mis padres y padrinos</p>
                    </div>

                    <div className="family__family">
                        <div className="family__family-group">
                            <h3 className="family__family-title">Mis Padres</h3>
                            <p className="family__family-names">
                                Yesenia Ortega Ortíz<br />
                                Francisco Javier Nava Trinidad
                            </p>
                        </div>

                        <div className="family__family-divider">✦</div>

                        <div className="family__family-group">
                            <h3 className="family__family-title">Mis Padrinos</h3>
                            <p className="family__family-names">
                                Rosa Trinidad Carmona<br />
                                Rosa Ma. Ortíz Saucedo
                            </p>
                        </div>

                    </div>
                </div>
                <div className="family__family-draw">
                    <img src={bg} alt="Background family" />
                </div>
            </div>
        </div>
    )
}

