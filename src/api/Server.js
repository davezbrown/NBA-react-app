let token = 'f76fa86309674b91a6c2d0ff126a293c95c208992659873e';

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://understood-available-guava.glitch.me/api/players`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
    }

    return await response.json()
    },
    create: async(data = {}) => {
        const response = await fetch(`http://understood-available-guava.glitch.me/api/players`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
        },
        update: async (id, data = {}) => {
            const response = await fetch(`http://understood-available-guava.glitch.me/api/players/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
        delete: async(id) => {
            const response = await fetch(`http://understood-available-guava.glitch.me/api/players/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }
