function solution(n, m) {
  var answer = [];
  // 최대공약수
  for (var i = Math.min(n, m); i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }
  // 최소공배수
  for (var i = Math.max(n, m); i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
  }

  return answer;
}

function GCD(n, m) {
  return m === 0 ? n : n > m ? GCD(m, n % m) : GCD(n, m % n);
}
function solution2(n, m) {
  return [GCD(n, m), (n * m) / GCD(n, m)];
}

function solution3(a, b) {
  for (let ab = a * b, r = b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

solution3(6, 6);
