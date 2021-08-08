from selenium import webdriver

browser=webdriver.Firefox()
browser.get("https://www.zhipin.com/job_detail/?ka=header-job")
# 2.UA伪装
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36 SE 2.X MetaSr 1.0'
}
page_text = browser.page_source

file=open('1.txt',mode='w')
file.write(page_text.encode('GBK','ignore').decode('GBK'))
print("已经将代码爬取结束")