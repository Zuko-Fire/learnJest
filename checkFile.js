import { readFileSync } from 'fs';

export default function checkFile(filePath, word) {
    try {
        const data = readFileSync(filePath, 'utf8');
        
        return data.includes(word) ? 'содержит' : 'не содержит';
    } catch (error) {
        return 'ошибка'; 
    }
}
