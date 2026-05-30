/**
 * Custom base query adapter for RTK Query using Axios.
 * Handles error formatting for consistency with RTK.
 */
export const axiosBaseQuery =
  (axiosInstance) =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (error) {
      return {
        error: {
          status: error.response?.status || 500,
          data: error.response?.data || error.message,
        },
      };
    }
  };
