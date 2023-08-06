
class RandomUserName {
  static genetaror(): string {
    const adjectives = ['快乐的', '聪明的', '勇敢的', '幸运的', '热情的', '可爱的', '善良的', '温柔的', '机智的', '慷慨的', '乐观的', '美丽的', '帅气的', '迷人的', '可爱的', '喜欢的'];
    const nouns = ['猫', '狗', '兔子', '小鸟', '鱼', '熊', '狐狸', '老虎', '狼', '蜜蜂', '蝴蝶', '鲸鱼', '松鼠', '猩猩', '犀牛', '大象', '猴子', '狗熊', '考拉', '袋鼠'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomAdjective + randomNoun;
  }
}

export default RandomUserName;