import facebookConfig from '@config/facebook'

export async function login() {
    const facebookResponse = await Expo.Facebook.logInWithReadPermissionsAsync(facebookConfig.appId, {
        permissions: ["public_profile", "email"]
    })
    const { type, token } = facebookResponse

    if (type === "success") {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        return response.json()
    } else {
        throw new Error({
            facebookResponse,
            message: 'Facebook Error'
        })
    }
}