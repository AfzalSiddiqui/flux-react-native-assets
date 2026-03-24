import { useFluxI18n } from '../i18n/useFluxI18n';

/** Hook returning type-safe structured string accessor using i18n */
export function useFluxStrings() {
  const { t } = useFluxI18n();

  return {
    Common: {
      ok: t('common.ok'),
      cancel: t('common.cancel'),
      done: t('common.done'),
      save: t('common.save'),
      delete: t('common.delete'),
      edit: t('common.edit'),
      close: t('common.close'),
      retry: t('common.retry'),
      loading: t('common.loading'),
      error: t('common.error'),
      success: t('common.success'),
    },
    Auth: {
      login: t('auth.login'),
      logout: t('auth.logout'),
      signUp: t('auth.signUp'),
      email: t('auth.email'),
      password: t('auth.password'),
      forgotPassword: t('auth.forgotPassword'),
    },
    Dashboard: {
      title: t('dashboard.title'),
      welcome: t('dashboard.welcome'),
    },
    Payment: {
      title: t('payment.title'),
      amount: t('payment.amount'),
      pay: t('payment.pay'),
      confirmPayment: t('payment.confirmPayment'),
    },
  };
}
