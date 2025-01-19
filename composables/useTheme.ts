import { ref, onMounted } from 'vue';
import Theme from '../utils/theme';

export const useTheme = () => {
  const STORAGE_KEY = 'selected-theme';
  const defaultTheme = 'red';

  const currentTheme = ref<string>(defaultTheme);
  const theme = ref<Theme | null>(null);

  const setTheme = (newTheme: string) => {
    if (!theme.value || !import.meta.client) return;
    theme.value.set(newTheme);
    currentTheme.value = newTheme;
  };

  onMounted(() => {
    theme.value = new Theme(defaultTheme);
    currentTheme.value = localStorage.getItem(STORAGE_KEY) || defaultTheme;
  });

  return {
    theme,
    currentTheme,
    setTheme,
  };
};
