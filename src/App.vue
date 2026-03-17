<script setup>
import { computed, ref } from 'vue'

/**
 * @typedef {Object} FriendItem
 * @property {string} name
 * @property {number} level
 */

/** @type {FriendItem[]} */
const friends = [
  { name: '谭若鹏', level: 9 },
  { name: '程柯菘', level: 8.5 },

  { name: '周一鸣', level: 8 },
  { name: '温皓', level: 8 },
  { name: '谭云山', level: 8 },
  { name: '莫言琪', level: 8 },
  { name: '小灿', level: 8 },

  { name: '陈佳', level: 7.5 },
  { name: '陈天昊', level: 7.5 },
  { name: '黄雅妮', level: 7.5 },
  { name: '周善林', level: 7.5 },

  { name: '刘梓萌', level: 7 },
  { name: '罗畅', level: 7 },
  { name: '肖克', level: 7 },
  { name: '黄榆钧', level: 7 },
  { name: '青春有博', level: 7 },

  { name: '紫色森林', level: 6.5 },
  { name: '木叶', level: 6.5 },
  { name: '刘佳鑫', level: 6.5 },
  { name: '李一敏', level: 6.5 },
  { name: '55开', level: 6.5 },
  { name: '许铭驿', level: 6.5 },
  { name: '喜来', level: 6.5 },
  { name: '苏光伟', level: 6.5 },
  { name: '史淦尹', level: 6.5 },
  { name: '李津', level: 6.5 },
  { name: '张谦益', level: 6.5 },
  { name: '胡斌', level: 6.5 },

  { name: '爱乒乓', level: 6 },
  { name: '崖山', level: 6 },
  { name: '郭靖', level: 6 },
  { name: '吴艳阳', level: 6 },
  { name: '飞哥', level: 6 },
  { name: '沧海', level: 6 },
  { name: '许幸', level: 6 },
  { name: 'Tomorrow', level: 6 },
  { name: '陈凯', level: 6 },
  { name: '李丹', level: 6 },
  { name: '沈忱', level: 6 },
  { name: '文博', level: 6 },
  { name: '李顺', level: 6 },
  { name: '毛羽刚', level: 6 },

  { name: '快乐3A', level: 5.5 },
  { name: '朵朵爸', level: 5.5 },
  { name: '罗闯', level: 5.5 },
  { name: '鹏程', level: 5.5 },
  { name: '徐灿辉', level: 5.5 },
  { name: '余波澜', level: 5.5 },
  { name: '黄辉', level: 5.5 },
  { name: '周沛然', level: 5.5 },
  { name: '968', level: 5.5 },
  { name: '赵碧', level: 5.5 },
  { name: '卢卓君', level: 5.5 },
  { name: '孙鏖', level: 5.5 },
  { name: '李旻', level: 5.5 },
  { name: '康广清', level: 5.5 },
  { name: '过嘉俊', level: 5.5 },
  { name: '刘鑫瑞', level: 5.5 },
  { name: '邱德明', level: 5.5 },
  { name: '彭理', level: 5.5 },
  { name: '碧血剑', level: 5.5 },
  { name: '光头阳', level: 5.5 },
  { name: '姜婉良', level: 5.5 },
  { name: '天空', level: 5.5 },
  { name: '阿威', level: 5.5 },
  { name: '超短裙', level: 5.5 },
  { name: '管显达', level: 5.5 },
  { name: '周亮', level: 5.5 },
  { name: '胡钊', level: 5.5 },
  { name: '张建军', level: 5.5 },
  { name: '辰风', level: 5.5 },
  { name: '李成玉', level: 5.5 },
  { name: '必应', level: 5.5 },
  { name: '钱湘江', level: 5.5 },
  { name: '方雷', level: 5.5 },

  { name: '王梓煜', level: 5 },
  { name: '周喆', level: 5 },
  { name: '陈飞禧', level: 5 },
  { name: '罗旭葵', level: 5 },
  { name: '沈云峰', level: 5 },
  { name: '滑滑哥', level: 5 },
  { name: '土木加冰', level: 5 },
  { name: '汤维臣', level: 5 },
  { name: '杨洋', level: 5 },
  { name: '小熊', level: 5 },
  { name: '谭桔红', level: 5 },
  { name: '乒乓强哥', level: 5 },
  { name: '青山绿水', level: 5 },
  { name: '王东', level: 5 },
  { name: '杨锋', level: 5 },
  { name: '刘祖槐', level: 5 },
  { name: '天下有雪', level: 5 },
  { name: '周明强', level: 5 },
  { name: '林君颖', level: 5 },
  { name: '陈鑫', level: 5 },
  { name: '易红福', level: 5 },
  { name: '赵军杰', level: 5 },
  { name: '刘志宏', level: 5 },
  { name: '欧阳宁峰', level: 5 },
  { name: '赵喻明', level: 5 },
  { name: '汤宇杰', level: 5 },
  { name: '胡咸熙', level: 5 },
  { name: '彭伟', level: 5 },
  { name: '廖兴', level: 5 },
  { name: '吴红波', level: 5 },
  { name: '李盾', level: 5 },
  { name: '隆杰', level: 5 },
  { name: '崔光明', level: 5 },
  { name: '楚门', level: 5 },
  { name: '袁芳', level: 5 },
  { name: '雷坤', level: 5 },

  { name: '王军', level: 4.5 },
  { name: '老彭', level: 4.5 },
  { name: '老牛', level: 4.5 },
  { name: '白兰', level: 4.5 },
  { name: '从亦央', level: 4.5 },
  { name: '孙亮', level: 4.5 },
  { name: '李岳峰', level: 4.5 },
  { name: '格斗士', level: 4.5 },
  { name: '小李哥', level: 4.5 },
  { name: '王高瑞', level: 4.5 },
  { name: '李春生', level: 4.5 },
  { name: '陈志林', level: 4.5 },
  { name: '邓杨', level: 4.5 },
  { name: '大漠尼尼', level: 4.5 },
  { name: '罗宾汉斯', level: 4.5 },
  { name: '文锋', level: 4.5 },
  { name: '发哥', level: 4.5 },
  { name: '王剑', level: 4.5 },
  { name: '书签', level: 4.5 },
  { name: '唐晖', level: 4.5 },
  { name: '彭姣', level: 4.5 },
  { name: '李欣欣', level: 4.5 },
  { name: '盛海潮', level: 4.5 },
  { name: '陈金红', level: 4.5 },
  { name: '森林', level: 4.5 },
  { name: '期盼明天', level: 4.5 },
  { name: '平安是福', level: 4.5 },
  { name: '何仙姑', level: 4.5 },
  { name: '杨莉', level: 4.5 },
  { name: '小力', level: 4.5 },
  { name: '向永棣', level: 4.5 },
  { name: '小鱼儿', level: 4.5 },
  { name: '刘吉金', level: 4.5 },
  { name: '李金', level: 4.5 },
  { name: '黄青', level: 4.5 },
  { name: '欧阳炜宇', level: 4.5 },
  { name: '丘桐', level: 4.5 },
  { name: '袁攀', level: 4.5 },
  { name: '蒋博闻', level: 4.5 },
  { name: '宋福', level: 4.5 },
  { name: '安红', level: 4.5 },
  { name: '冯德军', level: 4.5 },
  { name: '彭波', level: 4.5 },

  { name: '四海制衣', level: 4 },
  { name: '袁彪', level: 4 },
  { name: '李小群', level: 4 },
  { name: '张华仪', level: 4 },
  { name: '狄乐', level: 4 },
  { name: '李叶辉', level: 4 },
  { name: '屈屈', level: 4 },
  { name: '罗冬胜', level: 4 },
  { name: '韩业元', level: 4 },
  { name: '赵刚', level: 4 },
  { name: '梁朝晖', level: 4 },
  { name: '海鲜', level: 4 },
  { name: '姚正', level: 4 },
  { name: '杨克', level: 4 },
  { name: '黑格', level: 4 },
  { name: '梅朵朵', level: 4 },
  { name: '青萍梦之', level: 4 },
  { name: '南方一浪', level: 4 },
  { name: '啦啦', level: 4 },
  { name: '雷兰兰', level: 4 },
  { name: '兰子', level: 4 },
  { name: '邓冬兴', level: 4 },
  { name: '周卓', level: 4 },
  { name: '东子', level: 4 },
  { name: '曾哥', level: 4 },
  { name: '温故晨夕', level: 4 },
  { name: '盛志革', level: 4 },
  { name: '黄忠', level: 4 },
  { name: '山泉水', level: 4 },
  { name: '波姐', level: 4 },
  { name: '谭吉芳', level: 4 },
  { name: '迷糊', level: 4 },
  { name: '李四清', level: 4 },
  { name: '王志军', level: 4 },
  { name: '金炼', level: 4 },
  { name: '周小小', level: 4 },
  { name: '李科', level: 4 },
  { name: '张波', level: 4 },
  { name: '大豆豆', level: 4 },
  { name: '大罗', level: 4 },
  { name: '杨勇', level: 4 },
  { name: '安安', level: 4 },
  { name: '佩恩', level: 4 },
  { name: '殷颖', level: 4 },
  { name: '安琪', level: 4 },
  { name: '张军', level: 4 },
  { name: '林丰', level: 4 },
  { name: '秋兰', level: 4 },
  { name: '茉莉', level: 4 },
  { name: '邓邓', level: 4 },
  { name: '欧阳健', level: 4 },
  { name: '小星星', level: 4 },
  { name: '糖糖', level: 4 },
  { name: '乐乐陶陶', level: 4 },
  { name: '皮华波', level: 4 },
  { name: '赵博', level: 4 },
  { name: '英子', level: 4 },
  { name: '胡望', level: 4 },
  { name: '米思蕾', level: 4 },
  { name: '刘明慧', level: 4 },
  { name: '林芝', level: 4 },
  { name: '张玉蓉', level: 4 },
  { name: '赤心木', level: 4 },
  { name: '周哥', level: 4 },
  { name: '小玫K', level: 4 },
  { name: '日月', level: 4 },
  { name: '唐毅', level: 4 },
  { name: '张明耀', level: 4 },
  { name: '荷花', level: 4 },
  { name: '王上', level: 4 },
  { name: '小弹壳', level: 4 },
  { name: '王洵', level: 4 },
  { name: '任鹏之', level: 4 },
  { name: '王旭', level: 4 },
  { name: '易靖', level: 4 },
  { name: '李一恒', level: 4 },
  { name: '欧国良', level: 4 },

  { name: '王志红', level: 3.5 },
  { name: '秀秀', level: 3.5 },
  { name: '春花', level: 3.5 },
  { name: '步伐', level: 3.5 },
  { name: '牧雨', level: 3.5 },
  { name: '易美君', level: 3.5 },
  { name: '梁华', level: 3.5 },
  { name: '成强', level: 3.5 },
  { name: '追梦人', level: 3.5 },
  { name: '陈育松', level: 3.5 },
  { name: '柠檬', level: 3.5 },
  { name: '楠楠', level: 3.5 },
  { name: '小蜜蜂', level: 3.5 },
  { name: '贺水萍', level: 3.5 },
  { name: '良晨晨', level: 3.5 },
  { name: '彭丽芳', level: 3.5 },
  { name: '谢建东', level: 3.5 },
  { name: '刘澍', level: 3.5 },
  { name: '胡译尹', level: 3.5 },
  { name: '田田', level: 3.5 },
  { name: '小丫', level: 3.5 },
  { name: '吕梅湘', level: 3.5 },
  { name: '黄汕', level: 3.5 },
  { name: '毛先珂', level: 3.5 },
  { name: '柳柳', level: 3.5 },
  { name: '张敏', level: 3.5 },
  { name: '陈湘媛', level: 3.5 },
  { name: '沈丽莎', level: 3.5 },
  { name: '肖海凤', level: 3.5 },
  { name: '木兔', level: 3.5 },
  { name: '泡沫', level: 3.5 },

  { name: '兜兜', level: 3 },
  { name: '周绍军', level: 3 },
  { name: '锦瑜', level: 3 },
  { name: '无段高手', level: 3 },
  { name: '朱明钦', level: 3 },
  { name: '谢咏', level: 3 },
  { name: '简兮', level: 3 },
  { name: '张仲坤', level: 3 },
  { name: '何诗雨', level: 3 },
  { name: '小胖徐', level: 3 },
  { name: '钟建宁', level: 3 },
  { name: '玲珑心香', level: 3 },
  { name: '敏捷', level: 3 },
  { name: '陈怡', level: 3 },
  { name: '陈芬', level: 3 },
  { name: '王容', level: 3 },
  { name: '毛忠霞', level: 3 },
  { name: '沙漠枫', level: 3 },
  { name: '刘娟', level: 3 },
  { name: '陈冰雪', level: 3 },
  { name: '周静', level: 3 },
  { name: '刘双', level: 3 },
  { name: '刘玉香', level: 3 },
  { name: '毛华', level: 3 },
  { name: '揭欣怡', level: 3 },
  { name: '黄萍', level: 3 },
]

const searchKeyword = ref('')
const sortField = ref('level')
const sortOrder = ref('desc')

const visibleFriends = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()

  const filtered = [...friends].filter((item) => item.name.toLowerCase().includes(keyword))

  if (sortField.value === 'name') {
    return filtered.sort((a, b) => {
      const result = a.name.localeCompare(b.name, 'zh-Hans-CN')
      return sortOrder.value === 'asc' ? result : -result
    })
  }

  return filtered.sort((a, b) =>
    sortOrder.value === 'desc' ? b.level - a.level : a.level - b.level,
  )
})
</script>

<template>
  <main class="app">
    <h1>乒乓球友档位榜</h1>
    <p class="desc">档位使用数字表示，数字越大代表水平越高。</p>

    <section class="toolbar">
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="搜索球友姓名..."
        aria-label="搜索球友"
      />
      <select v-model="sortField" aria-label="排序字段">
        <option value="level">按档位</option>
        <option value="name">按姓名</option>
      </select>
      <select v-model="sortOrder" aria-label="排序顺序">
        <option value="asc">升序</option>
        <option value="desc">降序</option>
      </select>
    </section>

    <table>
      <thead>
        <tr>
          <th style="width: 72px">排名</th>
          <th>球友</th>
          <th style="width: 120px">档位</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in visibleFriends" :key="`${item.name}-${item.level}-${index}`">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td><span class="level">{{ item.level }}</span></td>
        </tr>
      </tbody>
    </table>

    <p v-if="visibleFriends.length === 0" class="empty">没有找到匹配的球友。</p>
  </main>
</template>
