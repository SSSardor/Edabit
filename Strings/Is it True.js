function isTrue(relation) {
  return eval(relation.replace('=', '==='));
}
