import { API_LINK } from '../utils/const/api';
import type { RepositoriesList } from '../types/repos';

export const useRepos = () => {
    return {
        getRepos: async (current_page: Ref<number>, per_page: Ref<number>) => {
            return $fetch<RepositoriesList>(`${API_LINK}`, {
                query: {
                    q: 'language:javascript',
                    sort: 'stars',
                    order: 'desc',
                    per_page: per_page.value,
                    page: current_page.value
                }
            })
        }
    };
};
