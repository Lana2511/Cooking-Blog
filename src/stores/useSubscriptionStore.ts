import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'subscription'

export const useSubscriptionStore = defineStore('subscription', () => {
    const isSubscribed = ref(false)
    const email = ref('')

    // init из localStorage (сразу при создании стора)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
        try {
            const data = JSON.parse(saved)
            isSubscribed.value = !!data?.isSubscribed
            email.value = data?.email || ''
        } catch (e) {
            // если localStorage сломан/битый JSON — просто игнорим
            localStorage.removeItem(STORAGE_KEY)
        }
    }

    function subscribe(newEmail: string) {
        console.log('clicked')
        if (!newEmail)
            return

        isSubscribed.value = true
        email.value = newEmail

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ isSubscribed: true, email: newEmail }),
        )
    }

    function unsubscribe() {
        isSubscribed.value = false
        email.value = ''

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ isSubscribed: false, email: '' }),
        )
    }

    return {
        isSubscribed,
        email,
        subscribe,
        unsubscribe,
    }
})
