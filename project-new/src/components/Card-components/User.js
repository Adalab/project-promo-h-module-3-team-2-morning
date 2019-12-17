import React from 'react';

function User() {
    return (
        <div className="user-details">
            <header className="card__header js-card__header">
                <h1 className="card__name js-card__name">
                    Nombre Apellido
                </h1>

                <h2 className="card__role js-card__role">
                    Front-end developer
                </h2>
            </header>
        </div>
    );
}
export default User;