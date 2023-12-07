export async function agregarVista(data) {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/anadir`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // Check if the response contains JSON data
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const responseData = await response.json();
            return responseData;
        } else {
            // Handle the case where the response is empty or not JSON
            console.error('Response does not contain valid JSON data');
            return null; // Or handle it in a way that makes sense for your application
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
