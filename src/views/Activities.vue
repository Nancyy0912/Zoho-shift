<template>
  <a-layout class="app-layout">
    <a-layout-sider width="300" class="calendar-sider">
      <a-card title="Calendar">
        <a-calendar
          v-model:value="value"
          v-model:mode="mode"
          @change="onPanelChange()"
        />
      </a-card>
    </a-layout-sider>
    <a-layout-content class="content-layout">
      <a-card title="Input Form">
        <a-form :layout="'vertical'" class="form-layout">
          <a-table :dataSource="inputRows" :pagination="false" rowKey="id">
            <template #bodyCell="{ record, index }">
              <a-row :gutter="16" class="input-row">
                <a-col :span="6">
                  <a-form-item :label="`Input ${index + 1}`">
                    <a-time-picker
                      v-model:value="record.input1"
                      :placeholder="`Select time ${index + 1}`"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="6">
                  <a-form-item :label="`Input ${index + 1}`">
                    <a-time-picker
                      v-model:value="record.input2"
                      :placeholder="`Select time ${index + 1}`"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="6">
                  <a-form-item :label="`Input ${index + 1}`">
                    <a-input
                      v-model:value="record.input3"
                      :placeholder="`Enter input ${index + 1}`"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="6" class="delete-button-col">
                  <a-button type="primary" danger @click="removeInputRow(index)"
                    >Delete{{ value }}</a-button
                  >
                </a-col>
              </a-row>
            </template>
          </a-table>
          <a-form-item class="add-row-button">
            <a-button type="primary" @click="addInputRow">Add Row</a-button>
          </a-form-item>
        </a-form>
      </a-card>
      <a-card title="Review Card" class="additional-card">
        <a-table></a-table>
        <!-- <p>This is another card below the Input Form card. You can add any content here.</p> -->
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dayjs } from "dayjs";
import { Form, Input, Button, Table, Card, Row, Col } from "ant-design-vue";

const value = ref<Dayjs>();
const mode = ref<string>("month");
const inputRows = ref<
  Array<{ id: number; input1: string; input2: string; input3: string }>
>([{ id: Date.now(), input1: "", input2: "", input3: "" }]);

const onPanelChange = (value: Dayjs, mode: string) => {
  console.log("Hiii",value.value, mode.value);
};

const addInputRow = () => {
  inputRows.value.push({ id: Date.now(), input1: "", input2: "", input3: "" });
};

const removeInputRow = (index: number) => {
  inputRows.value.splice(index, 1);
};
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.calendar-sider {
  background: #fff;
}

.content-layout {
  padding: 24px;
}

.form-layout {
  display: flex;
  flex-direction: column;
}

.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.delete-button-col {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.add-row-button {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
.additional-card {
  margin-top: 24px;
}
</style>
