<script setup lang="ts">
import { logoSrc } from '@/settings/projectSetting'

const themeStore = useThemeStore()
const userStore = useUserStore()
const [isLoading, toggle] = useToggle()

const title = import.meta.env.VITE_APP_TITLE

const formRef = ref()

const formRules = {
  username: { required: true, message: '请输入用户名', trigger: ['input'] },
  password: { required: true, message: '请输入密码', trigger: ['input'] },
}

const form = ref({
  username: 'admin',
  password: '123456',
})

async function handleLogin() {
  try {
    toggle()
    await unref(formRef).validate()
    await userStore.login(unref(form))
  }
  catch (error) {

  }
  finally {
    toggle()
  }
}
</script>

<template>
  <div class="h-100vh flex-center">
    <VThemeIcon class="absolute right-32px top-32px cursor-pointer" />

    <NGrid
      item-responsive
      responsive="screen"
      class="h-full"
    >
      <NGi
        span="xs:24 m:12"
        class="flex-center"
        :style="{ backgroundColor: themeStore.themeColor }"
      >
        <img src="/svgs/login.svg">
      </NGi>

      <NGi
        span="xs:24 m:12"
        class="flex-center bg-#fff dark:bg-#101014"
      >
        <div class="my-48px w-50%">
          <div class="flex-center">
            <img
              :src="logoSrc"
              class="h-50px"
            >
            <span class="ml-12px text-32px">{{ title }}</span>
          </div>

          <div class="mb-24px mt-16px flex-center">
            <NText :depth="3">
              一款快速开发后台的权限管理系统
            </NText>
          </div>

          <NForm
            ref="formRef"
            :model="form"
            :rules="formRules"
            :show-label="false"
          >
            <NFormItem path="username">
              <NInput
                v-model:value="form.username"
                placeholder="请输入用户名"
                size="large"
              >
                <template #prefix>
                  <div class="i-icon-park-outline-user mr-4px" />
                </template>
              </NInput>
            </NFormItem>
            <NFormItem path="password">
              <NInput
                v-model:value="form.password"
                placeholder="请输入密码"
                size="large"
                type="password"
                show-password-on="mousedown"
              >
                <template #prefix>
                  <div class="i-icon-park-outline-lock mr-4px" />
                </template>
              </NInput>
            </NFormItem>
            <NButton
              :loading="isLoading"
              type="primary"
              block
              size="large"
              @click="handleLogin"
            >
              登 录
            </NButton>
          </NForm>
        </div>
      </NGi>
    </NGrid>
  </div>
</template>
