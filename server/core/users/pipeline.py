from django.contrib.auth import authenticate

def save_profile_picture(backend, user, response, is_new=False, *args, **kwargs):
    authenticate(username=user.username, password=user.password)
    if backend.name == 'vk-oauth2':
        if response.get('photo'):
            user.photo = response['photo']
        screen_name = response.get('screen_name')
        user.username = screen_name if screen_name else (response.get('first_name') + "_" + response.get('last_name')).lower().replace(" ", "_")
        user.first_name = response.get('first_name')
        user.last_name = response.get('last_name')
        user.auth_type = 'vk'
    elif backend.name == 'telegram':
        user.auth_type = 'telegram'
        if response.get('photo_url'):
            user.photo = response['photo_url']

    user.save()