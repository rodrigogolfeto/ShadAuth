import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";

export function useAuth() {
    const authUser = computed(() => usePage().props.auth.user)
    const isAuth = computed(() => !!authUser.value?.id)
    return { isAuth, authUser }

}
