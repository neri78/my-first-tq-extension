const assert = require("assert");

module.exports = async function (helper) {
  // validation_fieldsに入力された値を取得
  const { answer1 } = helper.validationFields;
  console.log(answer1);
  // このBlogの執筆者はケーキ派らしい
  if (answer1 !== 'ケーキ') {
    return helper.fail(`ケーキこそ究極のデザートなり！`);
  }

  // 正しい派閥を入力した場合
  helper.success(`
    ケーキ万歳！
  `);
};
