import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("Deve deleter um user", async () => {
    const input = DeleteUserSchema.parse({
        idToDelete: "id-mock-fulano",
        token: "token-mock-fulano"
    })

    const output = await userBusiness.deleteUserById(input)

    expect(output).toEqual({
        message: "Deleção realizada com sucesso"
      })
  })
})