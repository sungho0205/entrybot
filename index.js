var redirect = confirm("엔트리봇 설치페이지로 이동하시겠습니까?")
if (redirect === true) {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=781118354445303818&permissions=1409432662&redirect_uri=https%3A%2F%2Fxn--oy2bk5dcxkf0n.ml%2F&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20gdm.join%20rpc%20rpc.notifications.read%20bot%20webhook.incoming%20messages.read%20applications.builds.upload%20applications.commands%20applications.commands.update%20applications.store.update%20applications.entitlements%20activities.read%20activities.write%20relationships.read%20applications.builds.read"
}