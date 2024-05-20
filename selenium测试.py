# # from selenium import webdriver

# # driver = webdriver.Chrome("chromedriver_win32/chromedriver.exe")
# # driver.get("http://www.google.com")


# from selenium import webdriver

# # 创建 ChromeOptions 对象
# options = webdriver.ChromeOptions()

# # 如果你想要添加更多选项，可以这样做
# # options.add_argument('--headless')  # 无头模式，不显示浏览器窗口
# # options.add_argument('--disable-gpu')  # 如果在 Windows 系统上，需要加上这个参数

# # 初始化 ChromeDriver
# driver = webdriver.Chrome(
#     executable_path="chromedriver_win32/chromedriver.exe", options=options
# )

# # 打开一个网页
# driver.get("http://www.google.com")

# # 关闭浏览器
# driver.quit()
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("https://www.selenium.dev/selenium/web/web-form.html")

title = driver.title

driver.implicitly_wait(0.5)

text_box = driver.find_element(by=By.NAME, value="my-text")
submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

text_box.send_keys("Selenium")
submit_button.click()

message = driver.find_element(by=By.ID, value="message")
text = message.text

driver.quit()
