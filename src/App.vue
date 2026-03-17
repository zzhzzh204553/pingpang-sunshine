<script setup>
import { computed, ref } from 'vue'
import { friends } from './data/friends'

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
    <h1>阳光乒协档位表</h1>
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
