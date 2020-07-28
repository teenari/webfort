/**
 * Copyright 2020 Teenari
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(async () => {
    const user = await (await fetch('https://fortnitebtapi.herokuapp.com/api/user', {
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })).json();
    if(user.authorization !== false) {
        if(!user.inServer) {
            return window.location = 'https://discord.gg/xkURTCz';
        }
        $('.loginDiscord')[0].innerText = 'Continue';
        $('.loginDiscord').css('background', 'white').css('color', 'black').click(() => {
            window.location = 'https://teenari.github.io/fortnitebt/dashboard';
        });
        $('#username')[0].innerText = `Welcome ${user.username}#${user.discriminator}`;
    }

    $('.loginDiscord').fadeIn();
})