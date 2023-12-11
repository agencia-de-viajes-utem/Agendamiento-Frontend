export const Agendar = async (token, packageId) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ packageId: packageId }),
    };


    try {
        const response = await fetch(`${import.meta.env.VITE_USUARIOS_BACKEND}/agendamiento`, requestOptions);

        if (response.ok) {
            const data = await response.json();
            if (data && data.jwt) {
                // Si se recibió una respuesta válida con un JWT, redirige a Facturación
                RedirectToFacturacion(data.jwt);
            } else {
                console.error('Error al agendar');
            }
        } else {
            console.error('Error al agendar');
        }
    } catch (error) {
        console.error('Error en la solicitud al servidor:', error.message);
        throw error;
    }
};

const RedirectToFacturacion = (jwt) => {
    const destination = `${import.meta.env.VITE_FRONT_FACTURACION}`;

    const redirectURL = `${destination}?token=${jwt}`;

    // Redirige a la nueva URL
    window.location.href = redirectURL;
};
