export const API = {
    baseURL: '',

    getAllStaff: async () => {
        return await API.fetch('/api/staff');
    },

    getAllBlogs: async () => {
        return await API.fetch('/api/blogs');
    },

    fetch: async (serviceName, args) => {
        try {
            const queryString = args ? new URLSearchParams(args).toString() : '';
            const url = API.baseURL + serviceName + (queryString ? '?' + queryString : '');
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json()
            return result;
        } catch (error) {
            console.error('API fetch error:', error);
            throw error;
        }
    }
}