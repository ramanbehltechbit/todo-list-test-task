import prisma from "../config/db";

export class TodoRepository {
    findAll() {
        return prisma.todo.findMany();
    }

    create(text: string) {
        return prisma.todo.create({ data: { text } });
    }

    update(id: string, completed: boolean) {
        return prisma.todo.update({
            where: { id },
            data: { completed },
        });
    }
    delete(id: string) {
        return prisma.todo.delete({
            where: { id },
        });
    }
}
