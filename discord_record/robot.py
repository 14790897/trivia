import discord
from discord.ext import commands

# 创建 Bot 实例，设置命令前缀和权限
intents = discord.Intents.default()
intents.message_content = True
intents.guilds = True
intents.channels = True
bot = commands.Bot(command_prefix="!", intents=intents)

# 在 Bot 启动时打印登录信息
@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

# 命令：记录所有频道信息
@bot.command()
async def log_channels(ctx, log_channel_name: str):
    # 获取日志频道
    log_channel = discord.utils.get(ctx.guild.text_channels, name=log_channel_name)
    
    # 检查日志频道是否存在
    if log_channel is None:
        await ctx.send(f'Log channel "{log_channel_name}" not found.')
        return
    
    # 开始记录频道信息
    await log_channel.send(f'Logging information for all channels in server: **{ctx.guild.name}**')
    
    # 遍历服务器中的所有频道
    for channel in ctx.guild.channels:
        channel_info = f'**Name**: {channel.name} | **Type**: {str(channel.type)} | **ID**: {channel.id}'
        await log_channel.send(channel_info)
    
    await ctx.send(f'All channel information has been logged in "{log_channel_name}".')

# 启动 Bot
bot.run('YOUR_BOT_TOKEN')
